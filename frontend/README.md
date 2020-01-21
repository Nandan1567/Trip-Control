# Cab Allocation System
This Web Application has build for both frontend and backend development

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
Each User can have only one ride at a time <br>
Enter  User Name to Login <br>
Check the previous rides status ,if the status is None User can book a ride.<br>
### DRIVER
Register as a Driver <br>
Each Driver can have only one ride at a time <br>
Enter  Driver Name to Login <br> 
Check the previous rides status  <br>
The requested  ride  from a User will be accepted by the driver.<br>
After completion of ride the status will be updated as finished.<br>

### Status
Ride contains status as 1.Requested,2.Accepted and 3.Done <br>
Requested ride from the user is displayed on the driver panel<br>
On Accepting the request from the user  the status is updated as 'Ongoing'<br>
After completion of ride the user can end the trip,then the  status is updated as 'Finished'.<br>

### RIDE DETAILS OF USER AND DRIVER
Enter the username to display the ride details in view_ride page <br>
Enter the drivername to display the ride details in view_ride page <br>



