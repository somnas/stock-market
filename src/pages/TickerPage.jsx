import Fetch from "../components/Fetch";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import StyledLogo from "../styled/StyledLogo";
import StyledNav from "../styled/StyledNav";
import logo from "../img/logo.svg";

export default function TickerPage(props) {
	const ticker = props.match.params.id;
	const name = props.match.params.name;
	const marketMarkets = props.match.params.marketMarkets;

	return (
		<>
			<StyledLogo>
				<Logo>
					<img src={logo} alt="Stock Market" />
				</Logo>
			</StyledLogo>
			<StyledNav listPage={true}>
				<Nav />
			</StyledNav>
			<Fetch name={name} ticker={ticker} marketMarkets={marketMarkets} />
		</>
	);
}
