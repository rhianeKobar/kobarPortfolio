import "./connect.scss"
import Links from "../../components/links/Links"

export default function Connect() {
	return (
		<div className="connect" title='connect'>
			<div className="info">
				<p><b>Let's collaborate!</b></p>
				<p>Connect with me through the links below, email me @<a title="mailto" href="mailto:shakira@nowitworkstech.com">shakira@nowitworkstech.com</a> or <a href="https://forms.gle/KKEqpQy4BHfXZHZa9">fill in this form</a> and I'll get back to you!</p>
				<p>I'm open to freelance, contract and volunteering opportunities in web/software development and UX/UI.</p> 
			</div>
			<Links/>
		</div>
	);
}
