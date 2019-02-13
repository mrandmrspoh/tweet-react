class Tweets extends React.Component {
    render() {
        var tweets = this.props.tweets.map(tweet => {
            return (
                <div>
                    <p><span class='h3'>{tweet.user.name}</span> @{tweet.user.screen_name} {tweet.created_at}</p>
                    <p>{tweet.text}</p>
                    <div>
                        <span><i class="fa fa-retweet"></i> {tweet.retweet_count} &nbsp;</span>
                        <span><i class="fa fa-heart"></i> &nbsp; {tweet.favorite_count}</span>
                    </div>
                    <hr/>
                </div>
            )
        })
        return (
            <div>
            {tweets}
            </div>
        );
    }
}


ReactDOM.render(
    <div>
      <Tweets tweets={tweets} />
    </div>,

    document.getElementById('root')
);