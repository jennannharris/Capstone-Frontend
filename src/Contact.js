const Contact = () => {
  return (
    <section id="contact">
      <div className="row">
        <div className="col-12">
          <h1>Contact</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          Get in touch! Send me an&nbsp;
          {/* non breaking space; will cheat a space into code */}
          <a href="mailto:jennannharris@hotmail.com">email</a>.
        </div>
      </div>
      {/* </div> <!-- end of first col in row #2 --> */}
    </section>
  );
};

export default Contact;
