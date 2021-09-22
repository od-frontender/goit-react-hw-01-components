import Profile from './components/profile/Profile';
import user from './Data/user.json';
import statisticalData from './Data/statistical-data.json';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import friends from './Data/friends.json';
import FriendListItem from './components/friendListItem/FriendListItem';
import transactions from './Data/transactions.json';
import TransactionHistory from './components/transaction/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statisticalData} />
      <FriendList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
}
