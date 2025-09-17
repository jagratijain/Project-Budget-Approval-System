export default {
  clearFilters() {
    search_input.setValue('');
    status_filter.setSelectedOption({label: "All Statuses", value: "all"});
    department_filter.setSelectedOption({label: "All Departments", value: "all"});
    Get_All_Projects.run();
  },
  
  applyFilters() {
    Get_All_Projects.run();
  }
}