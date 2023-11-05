from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def root():
    return jsonify({"message": "Hello World"})

@app.route("/prediction/")
def prediction():
    rating = float(request.args.get('rating'))
    loan = float(request.args.get('loan'))
    down = float(request.args.get('down'))
    appraised = float(request.args.get('appraised'))
    car = float(request.args.get('car'))
    card = float(request.args.get('card'))
    student = float(request.args.get('student'))
    mortage = float(request.args.get('mortage'))
    gross = float(request.args.get('gross'))

    ltv = (loan - down) / appraised
    dti = (car + card + student + mortage) / gross
    fedti = (car + card + student + mortage) / gross

    if rating >= 640.0 and ltv < 0.8 and dti <= 0.43 and fedti <= 0.28:
        return jsonify({"message": "Approved"})
    else:
        return jsonify({"message": "Denied"})

if __name__ == "__main__":
    app.run()
