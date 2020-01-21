# Cab Allocation System

Real time rides can be requested by customers on the system,
which can be accepted by available drivers (who don’t have an ongoing trip). Whichever
driver picks up gets to serve the user. Ride is completed after the customer ends it.

Further explanation and assumptions:
1. Each customer can request only one ride at a time.
2. Each driver can accept / serve only one ride at a time.
3. Every ride has 3 status - requested, accepted & done..

### Prerequisites

You need to install the following packages for backend:

```
asgiref==3.2.3
Django==3.0.1
django-cors-headers==3.2.0
django-jsonfield==1.4.0
djangorestframework==3.11.0
pkg-resources==0.0.0
pytz==2019.3
six==1.13.0
sqlparse==0.3.0

```

### Installing

Clone the repository

```
git clone https://github.com/sachins0023/Catalogue-management-system.git
```

Setting up your virtual environment:

```
python3 -m venv .env
```

Activating Virtual  Environment

```
source .env/bin/activate
```

Once the repository is cloned and virtual environment set up, go to the directory where the requirements.txt(Catalogue-management-system/backend/) is and type the following code in your terminal:

```
pip install requirements.txt
```

Then to run the server, go to the directory 'Catalogue-management-system/backend/cms/' and type the following code in terminal:

```
python3 manage.py runserver
```

Your server is set up with all the APIs active.

For Frontend which is ReactJS,
Dependencies are: 
```
"axios": "^0.19.0",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-redux": "^7.1.3",
"react-router-dom": "^5.1.2",
"redux": "^4.0.4",
"react-scripts": "0.9.5"
```
Go to 'Catalogue-management-system/frontend/cms_ui/' and type the following code in the terminal:

```
npm install
```
Then to run the react server, type the code:
```
npm start
```

The server has been set up and you are ready to go.

### While navigating through UI

A few mock data has been added to the sqlite database that is attached with the product. Also Click on the different categories listed in Categories column to list products filtered on categories and similarly click on the different brands in Brands column to list products filtered on Brands.

P.S:The aesthetics of the page is at the most basic level. Some more work could be put in to beautify the UI. The project has been completed keeping the sole aim as working completion rather than aesthetically pleasing. 

















