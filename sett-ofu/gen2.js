function verify() {
    return new Promise(resolve => {
      fetch('/val')
        .then(res => resolve(res.status == 200));
    });
  }