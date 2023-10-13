from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/phoenix")
def login():
    return render_template("phoenix.html")

@app.route("/phoenix", methods=["POST", "GET"])
def form():
    message = None
    if request.method == "POST":
        name = request.form["rev"]

        # Set the message to be displayed below the form
    return render_template("phoenix.html", message=message)

@app.route("/dodder")
def message_board():
    return render_template("dodder.html")

@app.route("/bull")
def photos():
    return render_template("bull.html")

if __name__ == "__main__":
    app.run(debug=True)