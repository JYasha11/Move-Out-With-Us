from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

stored_message = {}

@app.route('/submit', methods=['POST'])
def receive_data():
    global stored_message

    json_file = request.json
    print("Received Data:", json_file)

    data = {}
    try:
        for key, value in json_file.items():
            json_file[key] = float(value)

        url = f"https://fannie-mae-loan-api.uc.r.appspot.com/prediction/?rating={json_file['rating']}&loan={json_file['loan']}&down={json_file['down']}&appraised={json_file['appraised']}&car={json_file['car']}&card={json_file['card']}&student={json_file['student']}&mortage={json_file['mortgage']}&gross={json_file['gross']}"
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            data.update(json_file)
            stored_message = data.get('message', '')  
            print("Response JSON:", data)
        else:
            print(f"Request failed with status code {response.status_code}")

    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")

    return data

@app.route('/get-message', methods=['GET'])
def send_message():
    return jsonify(stored_message)

if __name__ == '__main__':
    app.run(debug=True)
