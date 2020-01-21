
# Cab Allocation System
Real time rides can be requested by customers on the system,
which can be accepted by available drivers (who don’t have an ongoing trip). Whichever
driver picks up gets to serve the user. Ride is completed after the customer ends it.

### Further explanation and assumptions:
1. Each customer can request only one ride at a time.
2. Each driver can accept / serve only one ride at a time.
3. Every ride has 3 status - requested, accepted & done.

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
git clone https://github.com/Nandan1567/Trip-Control.git
```

Setting up your virtual environment:

```
python3 -m venv cab
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

For Frontend which is ReactJS,
Dependencies are: 
```
"nodejs":"^v13.6.0",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-router-dom": "^5.1.2",
"react-scripts": "0.9.5"

```
Add packages
'''
"Bootstrap,jQuery,routing modules,sweetalert"
'''
Go to 'Catalogue-management-system/frontend/cms_ui/' and type the following code in the terminal:
