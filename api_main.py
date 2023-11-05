from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/prediction/")
def prediction(rating:float,loan:float, down:float, appraised:float, 
                car:float, card:float, student:float, mortage:float, gross:float):
    ltv= (loan-down)/appraised
    dti= (car+card+student+mortage)/gross
    fedti= (car+card+student+mortage)/gross

    if((rating>=640.0) & (ltv<.8) & (dti<=0.43) & (fedti<=0.28)):
        return {"message": "Approved"}
    else:
        return {"message": "Denied"}
    