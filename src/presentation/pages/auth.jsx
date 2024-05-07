import { createClient } from "@supabase/supabase-js"
import userIcon from '../../assets/user-solid.svg';
import passwordIcon from '../../assets/lock-solid.svg';
import { Link } from "react-router-dom";


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AuthPages() {
    return (
    <>
		<div className="container" id="container">
			<div className="form-container sign-up-container">
				
				<form action="#" method="POST">
					<h1>Login</h1>
					<div className="wrap">
						<img src={userIcon} alt="user icon"  width={20}/>
						<h3>Username</h3>
					</div>

					<input type="text" placeholder="Your Username"></input>

					<div className="wrap">
						<img src={passwordIcon} alt="password icon" width={20}/>
						<h3>Password</h3>
					</div>

					<input type="password" placeholder="Your Password"></input>

					<button type="submit">Login</button>
				</form>

				<div className="alt-login">
					<p>don't have an account? <Link to='/register'>Click Here</Link> to register.</p>
				</div>
			</div>
		</div>
    </>
    )
}

