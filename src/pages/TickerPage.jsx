import Fetch from "../components/Fetch";

export default function TickerPage(props) {
	const ticker = props.match.params.id;
	const name = props.match.params.name;
	const marketMarkets = props.match.params.marketMarkets

	console.log('this is tickerpage!')
	console.log(props)
	console.log('ticker: '+ticker)
	console.log('name: '+name)

	return ( 
		<Fetch name={name} ticker={ticker} marketMarkets={marketMarkets}  />
	);
}