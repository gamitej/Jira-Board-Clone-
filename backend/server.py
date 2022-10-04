from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# ==================  Login  ===================
@app.route('/login', methods=["POST"])
def login():
    try:
        req = request.get_json()
        print(req)
        userId, passwd = req["userId"], req["password"]
        if userId != "Amitej":
            return jsonify({"msg": "Username not found"}), 400
        if passwd != "1234":
            return jsonify({"msg": "Password Incorrect"}), 400
        return jsonify({"token": "amitej"}), 200
    except Exception as e:
        print(e)
        return jsonify({"msg": "Something went wrong"}), 500

# ==================  Page Not Found  ===================


@app.errorhandler(404)
def page_not_found(e):
    return jsonify({"msg": "Page Not Found"}), 403


if __name__ == '__main__':
    app.run(debug=True, port=5000)
