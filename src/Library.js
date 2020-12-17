const colors = {
	textColor: "#011936",
	backgroundColor: "#e5e5e5",
};

function getClass(value) {
	let className = "text-success";
	if (value < 0) className = "text-danger";
	if (value === 0) className = "text-dark";
	return className;
}
function getOperator(value) {
	let operator = "";
	if (value > 0) operator = "+";
	return operator;
}
export { colors, getClass, getOperator };
