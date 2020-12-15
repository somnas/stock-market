import Fetch from "../components/Fetch";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import StyledNav from "../styled/StyledNav";

export default function TickerPage(props) {
	const ticker = props.match.params.id;
	const name = props.match.params.name;
	const marketMarkets = props.match.params.marketMarkets;

	return (
		<div className="tickerpage">
			<Logo />
			<StyledNav>
				<Nav />
			</StyledNav>
			<Fetch name={name} ticker={ticker} marketMarkets={marketMarkets} />
		</div>
	);
}
