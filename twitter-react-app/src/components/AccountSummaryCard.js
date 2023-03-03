

function AccountSummaryCard({ generateRandomTweet, logo, text, name }) {

    return (
        <div className='account-summary-container'>
            <div className='account-summary-box'>
                <img className='account-summary-pic' src={logo} alt='Default twitter profile pic'></img>
                <div><p className='account-summary-text'>{text}</p></div>
                <button className='account-summary-button' name={name} onClick={(e) => generateRandomTweet(e.target.name)}>Display Random Tweet</button>
            </div>
        </div>
    );

}

export default AccountSummaryCard;