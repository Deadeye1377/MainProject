import Navbar from "../../components/navbar/Navbar";
import "./profile.css";

function Profile(){
    return(
        <div className="profile-body">
            <Navbar/>
            
            <div className="profile">
                <h1>Profile</h1>
                <h2>About Me</h2>
                
                <div className="profile-details">
                    <label>Profile Picture</label>
                    <input type="file" className="profile-input"  />
                    
                    <label>Display Name</label>
                    <input type="text" className="profile-input" placeholder="Displayname"/>
                    
                    <label>Username</label>
                    <input type="text" className="profile-input" placeholder="Username" />
                    
                    <label>Bio</label>
                    <textarea className="profile-input" rows="3"placeholder="A brief introduction about yourself"></textarea>
                    
                    <label>Email</label>
                    <input type="email" className="profile-input" placeholder="Email Here"/>
                    
                    <label>Location</label>
                    <input type="text" className="profile-input" placeholder="Locality" />
                    
                
                    
                    <button className="save-btn">Save</button>
                    <h2>Social Accounts</h2>
                 
                    <label>Twitter</label>
                    <label>Google</label>
                    <label>Facebook</label>
                
                    
                </div>
          
            </div>
           
        </div>
    )
}

export default Profile;