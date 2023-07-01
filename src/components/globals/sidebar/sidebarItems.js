import { ReactComponent as Currency } from 'assets/sidebarIcons/currency.svg';
import { ReactComponent as Contacts } from 'assets/sidebarIcons/contacts.svg';
import { ReactComponent as MerchantAd } from 'assets/sidebarIcons/merchantAd.svg';
import { ReactComponent as Kyc } from 'assets/sidebarIcons/kyc.svg';
import { ReactComponent as BankAcc } from 'assets/sidebarIcons/bankAcc.svg';
import { ReactComponent as Withdraw } from 'assets/sidebarIcons/withdraw.svg';
import { ReactComponent as Deposit } from 'assets/sidebarIcons/deposit.svg';
import { ReactComponent as Transactionhistory } from 'assets/sidebarIcons/transactionhistory.svg';
import { ReactComponent as Notifications } from 'assets/sidebarIcons/notifications.svg';
import { ReactComponent as Settings } from 'assets/sidebarIcons/settings.svg';
import { ReactComponent as Home } from 'assets/sidebarIcons/home.svg';

const items = [
  {
    source: <Home />,
    text: 'Sidebar.Home',
    to: '/dashboard'
  },
  {
    source: <Currency />,
    text: 'Sidebar.Currency',
    to: 'Currency'
  },
  {
    source: <Contacts />,
    text: 'Sidebar.Contacts',
    to: 'contacts'
  },
  {
    source: <MerchantAd />,
    text: 'Sidebar.MerchantAdmin',
    to: 'merchant-admin'
  },
  {
    source: <Kyc />,
    text: 'Sidebar.Kyc',
    to: 'kyc'
  },
  {
    source: <BankAcc />,
    text: 'Sidebar.Accnts',
    to: 'bank-accounts'
  },
  {
    source: <Withdraw />,
    text: 'Sidebar.Withdraw',
    to: 'assets/withdraw'
  },
  {
    source: <Deposit />,
    text: 'Sidebar.Deposit',
    to: 'deposit'
  },
  {
    source: <Transactionhistory />,
    text: 'Sidebar.Transaction',
    to: 'transaction'
  },
  {
    source: <Notifications />,
    text: 'Sidebar.Notification',
    to: 'notification'
  },
  {
    source: <Settings />,
    text: 'Sidebar.Settings',
    to: 'settings'
  }
];

export default items;
