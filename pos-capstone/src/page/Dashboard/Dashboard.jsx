import './Dashboard.style.css'
import CustomerRanking from '../../component/CustomerRanking/RangkingList'
import Table from "../../component/Table/Table";
import { DummyData } from "../../data/DummyData"
import Graph from '../../element/Graph/Graph';
import DashboardCard from '../../component/Cards/DashboardCard/DashboardCard';
import { CreditCard, People, Person } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { readallOrders } from "../../config/redux/actions/ordersAction";
import { totalSales, Visitors, newMember, prevMember, prevVisitors, prevtotalSales } from './ValueCard';
import Loader from '../../element/Loader/Loader';
import { fetchMembersall } from '../../config/redux/actions/memberActions';

const Dashboard = () => {

  const dispatch = useDispatch()
  const order = useSelector(state => state.orders.itemsall.data)
  const members = useSelector(state => state.members.membersall.data);

  const loading = useSelector(state => state.orders.loading)

  useEffect(() => {
    dispatch(readallOrders())
    dispatch(fetchMembersall())
  }, [])

  return (
    <>
      {loading ?
        <Loader
          secondaryColor="#B1464A"
          color="#FFF0DE"
        />
        :
        <div className='col dashboard-page'>
          <div className='row container-fluid mx-auto p-4'>
            <div className='py-4 text-header'>
              <h4>Sup, Admin.. good to see you, Mate!</h4>
              <p>Here are the whole data of your <span className='fw-bold'>RollMe Sushi Restaurant</span></p>
            </div>
            <div className='row'>
              <div className='col-md-7 col-lg-8'>
                <div className='dashboard-card-section row mb-4'>
                  <div className='col-md-4'>
                    <DashboardCard
                      title="Total Sales"
                      amount={order ? totalSales(order) : ''}
                      growth={order ? prevtotalSales(order) : ''}
                      icon={<CreditCard />}
                      className="col-md-2"
                    />
                  </div>
                  <div className='col-md-4'>
                    <DashboardCard title="Visitors"
                      amount={order ? Visitors(order) : ''}
                      growth={order ? prevVisitors(order) : ''}
                      icon={<People />}
                      className="col-md-2"
                    />
                  </div>
                  <div className='col-md-4'>
                    <DashboardCard
                      title="New Member"
                      amount={members ? newMember(members) : ''}
                      growth={members ? prevMember(members) : ''}
                      icon={<Person />}
                      className="col-md-2"
                    />
                  </div>
                </div>
                <div className='graph-element p-3 items-center w-100'>
                  <Graph
                    datas={order ? order : []}
                  />
                </div>
              </div>
              <div className='cust-rank-section col-md-3 col-lg-4'>
                <CustomerRanking />
              </div>
            </div>
            <div className='row table-section'>
              <div className='col'>
                <h5 style={{ fontFamily: "rubik", marginTop: "3%", marginBottom: "2%" }}>Top Selling Product</h5>
                <Table data={DummyData} />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )

}

export default Dashboard