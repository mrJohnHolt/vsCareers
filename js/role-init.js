(function () {
  document.documentElement.dataset.role = sessionStorage.getItem('demoRole') || 'visitor';
}());
