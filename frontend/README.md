# Cab Allocation System
This Web Application is developed using<br> 
1.Reactjs for frontend development.<br>
2.Django for backend development.<br>
3.PostgreSQL for Database.


## Further explanation and assumptions:
1. Each customer can request only one ride at a time.<br>
2. Each driver can accept / serve only one ride at a time.<br>
3. Every ride has 3 status - requested, accepted & done.<br>

## Installation

sudo apt-get install curl<br>
sudo apt-get install nodejs <br>
node --version  (13.6.0) <br>
npm --version (6.13.4)l<br>
sudo npm install -g create-react-app<br>
npm start<br>



## Usage
### USER
Register as a user <br>
Each user can have only one ride at a time <br>
Enter  user name to Login <br>
Check the previous rides status ,if the status is None user can book a ride.<br>
### DRIVER
Register as a Driver <br>
Each driver can have only one ride at a time <br>
Enter  driver name to Login <br> 
Check the previous rides status  <br>
The requested  ride  from a user will be accepted by the driver.<br>
After completion of ride the status will be updated as 'finished'.<br>

### Status
Ride contains status as 1.Requested,2.Accepted and 3.Done <br>
Requested ride from the user is displayed on the driver panel<br>
On Accepting the request from the user  the status is updated as 'ongoing'<br>
After completion of ride the user can end the trip,then the  status is updated as 'finished'.<br>

### RIDE DETAILS OF USER AND DRIVER
Enter the username to display the ride details in view_ride page <br>
Enter the drivername to display the ride details in view_ride page <br>



