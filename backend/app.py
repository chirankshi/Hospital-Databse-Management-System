from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId
from functools import wraps

app = Flask(__name__)
CORS(app)

# MongoDB Configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/HDM"
mongo = PyMongo(app)

# Collections
Login_SignUP_collection = mongo.db.Login_SignUP
Appointment_collection = mongo.db.Appointment
contact_collection = mongo.db.ContactForm

# ==============================
# Admin Decorator
# ==============================
def admin_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        user_id = request.headers.get('userId')
        if not user_id:
            return jsonify({"message": "Missing userId in headers"}), 401

        user = Login_SignUP_collection.find_one({"_id": ObjectId(user_id)})
        if not user or user.get('role') != 'admin':
            return jsonify({"message": "Access denied: Admins only"}), 403

        return f(*args, **kwargs)
    return decorated

# ==============================
# Welcome Route
# ==============================
@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Hospital DataBase API!"})

# ==============================
# Signup Route
# ==============================
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    full_name = data.get('full_name')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role', 'user')  # default is "user"

    if not all([full_name, email, password]):
        return jsonify({"message": "All fields are required"}), 400

    if Login_SignUP_collection.find_one({'email': email}):
        return jsonify({"message": "Email already exists!"}), 400

    result = Login_SignUP_collection.insert_one({
        'fullName': full_name,
        'email': email,
        'password': password,
        'role': role,
        'profileImage': '',
    })

    return jsonify({
        "message": "Signup successful!",
        "userId": str(result.inserted_id)
    }), 201

# ==============================
# Login Route
# ==============================
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = Login_SignUP_collection.find_one({'email': email})
    if not user or user['password'] != password:
        return jsonify({"message": "Invalid email or password!"}), 401

    return jsonify({
        "message": "Login successful!",
        "userId": str(user['_id']),
        "role": user.get("role", "user")
    }), 200

# ==============================
# Fetch User Profile
# ==============================
@app.route('/user/<user_id>', methods=['GET'])
def get_user_profile(user_id):
    user = Login_SignUP_collection.find_one({'_id': ObjectId(user_id)})

    if not user:
        return jsonify({"message": "User not found"}), 404

    return jsonify({
        "fullName": user.get('fullName'),
        "email": user['email'],
        "profileImage": user.get('profileImage', ''),
        "role": user.get("role", "user")
    }), 200

# ==============================
# Forgot Password Route
# ==============================
@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({"message": "Email is required"}), 400

    user = Login_SignUP_collection.find_one({'email': email})
    if not user:
        return jsonify({"message": "Email not found"}), 404

    return jsonify({
        "message": "Password reset link has been sent (simulated).",
        "resetInfo": f"Your current password is: {user['password']}"
    }), 200

# ==============================
# Contact Form Route
# ==============================
@app.route('/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    required_fields = ['name', 'email', 'message']
    if not all(data.get(field) for field in required_fields):
        return jsonify({"message": "Required fields are missing"}), 400

    contact_document = {
        'name': data.get('name'),
        'email': data.get('email'),
        'location': data.get('location'),
        'interest': data.get('interest'),
        'message': data.get('message'),
        'bookingType': data.get('bookingType'),
        'preferredDate': data.get('preferredDate'),
        'preferredTime': data.get('preferredTime')
    }

    try:
        contact_collection.insert_one(contact_document)
        return jsonify({"message": "Contact form submitted successfully!"}), 201
    except Exception as e:
        print("MongoDB Error:", e)
        return jsonify({"message": "Server error while saving contact data"}), 500

# ==============================
# Appointment Booking Route
# ==============================
@app.route('/api/appointments', methods=['POST'])
def create_appointment():
    data = request.get_json()
    required_fields = ['fullname', 'email', 'phone', 'date', 'gender', 'paymentMethod']

    if not all(data.get(field) for field in required_fields):
        return jsonify({"message": "All fields are required"}), 400

    appointment = {
        'fullname': data['fullname'],
        'email': data['email'],
        'phone': data['phone'],
        'date': data['date'],
        'gender': data['gender'],
        'paymentMethod': data['paymentMethod']
    }

    try:
        Appointment_collection.insert_one(appointment)
        return jsonify({"message": "Appointment booked successfully!"}), 201
    except Exception as e:
        print("MongoDB Error:", e)
        return jsonify({"message": "Error saving appointment"}), 500

# ==============================
# Admin: Get All Appointments
# ==============================
@app.route('/admin/appointments', methods=['GET'])
@admin_required
def get_all_appointments():
    try:
        appointments = list(Appointment_collection.find())
        for appt in appointments:
            appt['_id'] = str(appt['_id'])  # Convert ObjectId to string
        return jsonify(appointments), 200
    except Exception as e:
        print("Admin Fetch Error:", e)
        return jsonify({"message": "Failed to fetch appointments"}), 500

# ==============================
# Main
# ==============================
if __name__ == '__main__':
    app.run(debug=True)
