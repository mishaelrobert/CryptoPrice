import React, { Component } from 'react';
    import './History.css'
    import axios from 'axios'
    import moment from 'moment'



    class History extends Component {
        constructor () {
          super();
          this.state = {
              todayprice: {},
              yesterdayprice: {},
              twodaysprice: {},
              threedaysprice: {},
              fourdaysprice: {}
          }
          this.getBTCPrices = this.getBTCPrices.bind(this);
          this.getETHPrices = this.getETHPrices.bind(this);
          this.getLTCPrices = this.getLTCPrices.bind(this);
        }
        // getTodayPrice()
    localStorage.setItem('todayprice', JSON.stringify(f));
    this.setState({ todayprice: f });

    // getYesterdayPrice()
    localStorage.setItem('yesterdayprice', JSON.stringify(f));
    this.setState({ yesterdayprice: f });

    // getTwoDaysPrice()
    localStorage.setItem('twodaysprice', JSON.stringify(f));
    this.setState({ twodaysprice: f });

    // getThreeDaysPrice()
    localStorage.setItem('threedaysprice', JSON.stringify(f));
    this.setState({ threedaysprice: f });

    // getFourDaysPrice()
    localStorage.setItem('fourdaysprice', JSON.stringify(f));
    this.setState({ fourdaysprice: f });
        // This function gets the ETH price for a specific timestamp/date. The date is passed in as an argument
        getETHPrices (date) {
            return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
        }
        // This function gets the BTC price for a specific timestamp/date. The date is passed in as an argument
        getBTCPrices (date) {
            return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
        }
        // This function gets the LTC price for a specific timestamp/date. The date is passed in as an argument
        getLTCPrices (date) {
            return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
        }
      }
      if (!navigator.onLine) {
        this.setState({ todayprice: JSON.parse(localStorage.getItem('todayprice')) });
        this.setState({ yesterdayprice: JSON.parse(localStorage.getItem('yesterdayprice')) });
        this.setState({ twodaysprice: JSON.parse(localStorage.getItem('twodaysprice')) });
        this.setState({ threedaysprice: JSON.parse(localStorage.getItem('threedaysprice')) });
        this.setState({ fourdaysprice: JSON.parse(localStorage.getItem('fourdaysprice')) });
    }
      render() {
        return (
            <div className="history--section container">
                <h2>History (Past 5 days)</h2>
                <div className="history--section__box">
                    <div className="history--section__box__inner">
                        <h4>{this.state.todayprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.todayprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.todayprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.todayprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history--section__box__inner">
                        <h4>{this.state.yesterdayprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.yesterdayprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.yesterdayprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.yesterdayprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history--section__box__inner">
                        <h4>{this.state.twodaysprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.twodaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.twodaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.twodaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history--section__box__inner">
                        <h4>{this.state.threedaysprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.threedaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.threedaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.threedaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history--section__box__inner">
                        <h4>{this.state.fourdaysprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.fourdaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.fourdaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.fourdaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default History;