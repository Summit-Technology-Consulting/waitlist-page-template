// ENSURE THIS FITS YOUR LEGAL STANDING, BOILERPLATE PRIVACY POLICY MAY NOT WORK FOR ALL JURIS
// YOU TAKE FULL RESPONSIBILITY FOR THIS PRIVACY POLICY BY CHOOSING TO USE THIS TEMPLATE
import Constants from '../constants';

const PrivacyPolicy = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Privacy Policy for <strong>{Constants.platformName}</strong></h1>
            <p>
                At <strong>{Constants.platformName}</strong>, we value your privacy. We are committed to protecting your personal data and ensuring that your information is handled responsibly and securely.
            </p>
            <p>
                <strong>Information We Collect:</strong> We collect your first name and email address solely for the purpose of providing and improving our services on the platform. We do not sell or share your email address with third parties.
            </p>
            <p>
                <strong>Use of Your Information:</strong> Your email address will only be used to send you updates, news, or other relevant information about {Constants.platformName}. We may also use your email address to send you direct communications, including support, service announcements, and changes to our terms or policies.
            </p>
            <p>
                <strong>Data Retention:</strong> We will retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You may request deletion of your personal data by contacting us.
            </p>
            <p>
                <strong>Data Security:</strong> We implement and maintain reasonable security measures to protect your personal data. Although we do our best to safeguard your data, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <p>
                <strong>Contact Us:</strong> If you have any questions, concerns, or would like your email removed from our list, please contact us at <strong>{Constants.contactEmail}</strong>.
            </p>
            <p>
                We may update this Privacy Policy from time to time. If we make significant changes, we will notify you via email or post a prominent notice on our platform.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
