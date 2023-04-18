const SocialMedia = () => {
  const iframe = `<iframe src="https://snapwidget.com/embed/1031005" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:765px; height:510px"></iframe>`;

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

  return (
    <section className="socialmedia">
      <div className="socialMedia__wrapper">
        <div className="socialmedia__iframe">
          <Iframe iframe={iframe} />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
