import Fetch from "../components/Fetch";
import Nav from "../components/Nav";

export default function TickerPage(props) {

	const ticker = props.match.params.id;
	const name = props.match.params.name;
	const marketMarkets = props.match.params.marketMarkets

	return ( 
		<div className="tickerpage">
			<Nav/>
			<Fetch name={name} ticker={ticker} marketMarkets={marketMarkets}  />
		</div>
	);
	
}