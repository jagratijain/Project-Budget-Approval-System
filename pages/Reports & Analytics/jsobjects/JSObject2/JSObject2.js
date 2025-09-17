export default {
	Button2onClick () {
		//	write code here
		
  download(getExecutiveSummary.data, 'executive_summary.json', 'application/json');
  showAlert("Dashboard exported!", "success");

	}
}