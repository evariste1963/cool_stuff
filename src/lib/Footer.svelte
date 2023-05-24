<footer>
  <div class="footer">
    <p>
      coded by <span class="this-me">this.me</span>
    </p>
  </div>
</footer>

<style>
  footer {
    display: flex;
    margin-top: auto;
    bottom: 0;
    width: 100%;
    height: 3em;
    background: rgba(97, 108, 110, 0.99);
    box-shadow: 0px -1px 10px 0 rgb(0 0 0);
    text-align: center;
    color: #fff;
    font-weight: bolder;
    font-style: italic;
    z-index: 999;
  }

  .footer {
    display: flex;
    text-align: center;
    width: 100%;
    align-items: center;
  }
  p {
    margin: 0 auto;
    font-size: clamp(0.7rem, 1cqmin + 0.7rem, 3rem);
  }

  .this-me {
    color: rgb(46, 10, 80);
    font-size: clamp(0.7rem, 1.5cqmin + 0.7rem, 3rem);
    font-weight: bold;
  }
</style>
