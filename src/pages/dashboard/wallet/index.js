import React from 'react'
import { Button, Table } from 'antd'
import { Helmet } from 'react-helmet'
import PaymentCard from 'components/CleanUIComponents/PaymentCard'
import CoinCard from 'components/CleanUIComponents/CoinCard'
import PaymentAccount from 'components/CleanUIComponents/PaymentAccount'
import PaymentTransaction from 'components/CleanUIComponents/PaymentTransaction'
import Authorize from 'components/LayoutComponents/Authorize'
import { tableData } from './data.json'

class DashboardAlpha extends React.Component {
  render() {
    const tableColumns = [
      {
        title: 'Coins',
        dataIndex: 'coins',
        key: 'coins',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
      },
      {
        title: 'Changes',
        dataIndex: 'changes',
        key: 'changes',
      },
      // {
      //   title: 'Office',
      //   dataIndex: 'office',
      //   key: 'office',
      // },
      // {
      //   title: 'Date',
      //   dataIndex: 'date',
      //   key: 'date',
      // },
      // {
      //   title: 'Salary',
      //   dataIndex: 'salary',
      //   key: 'salary',
      //   sorter: (a, b) => a.salary - b.salary,
      // },
    ]

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="Dashboard Alpha wallet" />
        <div className="row">
          <div className="col-xl-3">
            <CoinCard
              title="Marine Coin"
              icon=""
              totalCoins="5800 MC"
              rate="50%"
              bgColor="#2C89DF"
            />
          </div>
          <div className="col-xl-3">
            <CoinCard
              title="Bit Coin"
              icon=""
              totalCoins="10.67 BTC"
              rate="20%"
              bgColor="#EF6044"
            />
          </div>
          <div className="col-xl-3">
            <CoinCard
              title="Ethereum"
              icon=""
              totalCoins="30.546 ETH"
              rate="10%"
              bgColor="#8458C1"
            />
          </div>
          <div className="col-xl-3">
            <CoinCard
              title="Ripple"
              icon=""
              totalCoins="5096 XRP"
              rate="20%"
              bgColor="#F8BE45"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Market Cap</strong>
                </div>
              </div>
              <div className="card-body">
                <Table
                  className="utils__scrollTable"
                  scroll={{ x: '100%' }}
                  columns={tableColumns}
                  dataSource={tableData}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Your Cards (3)</strong>
          <Button className="ml-3">View All</Button>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Matt Daemon"
              number="4512-XXXX-1678-7528"
              type="VISA"
              footer="Expires at 02/20"
              sum="$2,156.78"
            />
          </div>
          <div className="col-lg-4">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="David Beckham"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
              sum="$560,245.35"
            />
          </div>
          <div className="col-lg-4">
            <PaymentCard
              icon="lnr lnr-hourglass"
              name="Mrs. Angelina Jolie"
              number="6546-XXXX-1678-1579"
              type="VISA"
              footer="Locked Temporary"
              sum="$1,467,98"
            />
          </div>
        </div>
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Your Accounts (6)</strong>
          <Button className="ml-3">View All</Button>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PaymentAccount
              icon="lnr lnr-inbox"
              number="US 4658-1678-7528"
              footer="Current month charged: $10,200.00"
              sum="$2,156.78"
            />
          </div>
          <div className="col-lg-6">
            <PaymentAccount

              icon="lnr lnr-inbox"
              number="IBAN 445646-8748-4664-1678-5416"
              footer="Current month charged: $1,276.00"
              sum="$560,245.35"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PaymentAccount
              icon="lnr lnr-inbox"
              number="US 4658-1678-7528"
              footer="Current month charged: $10,200.00"
              sum="$2,156.78"
            />
          </div>
          <div className="col-lg-6">
            <PaymentAccount
              icon="lnr lnr-inbox"
              number="IBAN 445646-8748-4664-1678-5416"
              footer="Current month charged: $1,276.00"
              sum="$560,245.35"
            />
          </div>
        </div>
        <div className="utils__title mb-3">
          <strong className="text-uppercase font-size-16">Recent Transactions (167)</strong>
          <Button className="ml-3">View All</Button>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <PaymentTransaction
              income={false}
              amount="-$100.00"
              info="US 4658-1678-7528"
              footer="To AMAZON COPR, NY, 1756"
            />
            <PaymentTransaction
              income
              amount="+27,080.00"
              info="4512-XXXX-1678-7528"
              footer="To DigitalOcean Cloud Hosting, Winnetka, LA"
            />
            <PaymentTransaction
              income={false}
              amount="-100,000.00"
              info="6245-XXXX-1678-3256"
              footer="To Tesla Cars, LA, USA"
            />
            <div className="text-center pb-5">
              <Button type="primary" className="width-200" loading>
                Load More...
              </Button>
            </div>
          </div>
        </div>
      </Authorize>
    )
  }
}

export default DashboardAlpha
