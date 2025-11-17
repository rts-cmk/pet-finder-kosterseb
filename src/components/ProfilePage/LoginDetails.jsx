import React from 'react';

export default function LoginDetails() {
    return (
        <div className="login-details-component">
            <h2>Login Details</h2>
            <form className="login-details-form">
                <div className="form-group">
                    <label htmlFor="current-password">Current Password:</label>
                    <input type="password" id="current-password" name="current-password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="new-password">New Password:</label>
                    <input type="password" id="new-password" name="new-password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm New Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit" className="update-button">Update Password</button>
            </form>
        </div>
    );
}