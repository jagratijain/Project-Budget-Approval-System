export default {
  clearFilters() {
    search_input.setValue('');
    status_filter.setSelectedOption({label: "All Statuses", value: "all"});
    department_filter.setSelectedOption({label: "All Departments", value: "all"});
    Get_All_Projects.run();
  },
  
  applyFilters() {
    Get_All_Projects.run();
  },
  
  exportData() {
    try {
      const data = Get_All_Projects.data;
      if (!data || data.length === 0) {
        showAlert("No data to export", "warning");
        return;
      }
      
      download(data, 'projects_export.csv', 'text/csv');
      showAlert("Export successful!", "success");
      
    } catch (error) {
      console.error("Export failed:", error);
      showAlert("Export failed: " + error.message, "error");
    }
  }
}