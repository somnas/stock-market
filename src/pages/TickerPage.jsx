import Fetch from "../components/Fetch";
import Nav from "../components/Nav";

export default function TickerPage(props) {
	const ticker = props.match.params.id;
	const name = props.match.params.name;
	const marketMarkets = props.match.params.marketMarkets

	console.log('this is tickerpage!')
	console.log(props)
	console.log('ticker: '+ticker)
	console.log('name: '+name)

	return ( 
		<>
			<Nav/>
			<Fetch name={name} ticker={ticker} marketMarkets={marketMarkets}  />
		</>
	);
}