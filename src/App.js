import React, { Component } from 'react';
import Window from "./components/window";
class App extends Component {
  state = { schema: [
    { clicked: false, day: 1, alt: "rat in stocking", image: "https://image.freepik.com/free-photo/christmas-rat-red-santa-claus-hat_72474-451.jpg"},
    { clicked: false, day: 2, alt: "festive rat near cookies", image: "https://i.pinimg.com/236x/1b/f7/2b/1bf72bbbb890f35f0fc54fb0127e725f--christmas-images-christmas-pets.jpg"},
    { clicked: false, day: 3, alt: "rat near holly sprigs", image: "https://www.dapper.com.au/g24holly.jpg"},
    { clicked: false, day: 4, alt: "rat in oversized santa hat", image: "https://data.whicdn.com/images/91542056/original.jpg"},
    { clicked: false, day: 5, alt: "rat in christmas sweater", image: "https://pbs.twimg.com/media/CWPblTdUkAA6fIj.jpg"},
    { clicked: false, day: 6, alt: "rat in santa hat near snowy tinsel", image: "https://img.freepik.com/free-photo/rat-christmas-hat-among-christmas-tinsel-happy-new-year-rat-2020-chinese-calendar_116815-256.jpg?size=626&ext=jpg"},
    { clicked: false, day: 7, alt: "rat in a christmas top hat wearing a similar hat", image: "https://66.media.tumblr.com/09178b9b9290b1f3011b283b24df24e6/tumblr_pk95etBvKa1uhwc9wo1_1280.jpg"},
    { clicked: false, day: 8, alt: "four rats sleeping in santa hats", image: "https://img.memecdn.com/christmas-ratsmice_o_63310.jpg"},
    { clicked: false, day: 9, alt: "two rats at a toy table playing with small wooden christmas toys", image: "https://www.thesun.co.uk/wp-content/uploads/2016/04/1639841.main_image.jpg?strip=all"},
    { clicked: false, day: 10, alt: "baby rat on a wooden sled with a toy snowman", image: "https://www.thesun.co.uk/wp-content/uploads/2016/04/1639845.main_image.jpg?strip=all"},
    { clicked: false, day: 11, alt: "rat holding a red bauble in festive surroundings", image: "https://images.megapixl.com/4801/48010501.jpg"},
    { clicked: false, day: 12, alt: "two rats near a small christmas tree", image: "https://i.pinimg.com/originals/8e/00/c9/8e00c9c8c40a2810fcf822f79e377458.jpg"},
    { clicked: false, day: 13, alt: "rat in a santa hat holding an orange", image: "https://i.pinimg.com/236x/85/56/d7/8556d7f9b77bad0bec980946d6055f02--christmas-pets-christmas-animals.jpg"},
    { clicked: false, day: 14, alt: "three rats leaning over a sign that reads NOEL", image: "https://www.dapper.com.au/c135noel2.jpg"},
    { clicked: false, day: 15, alt: "rat in a chrismtas hat eating a snack", image: "https://s1.1zoom.me/big0/188/Christmas_Rats_Winter_hat_574998_1280x720.jpg"},
    { clicked: false, day: 16, alt: "three rats near a christmas tree one wears a Mrs Clause outfit",image: "https://photos1.blogger.com/blogger/7667/373/1600/christmas10-small.jpg"},
    { clicked: false, day: 17, alt: "rat popping out of a present", image: "https://ak3.picdn.net/shutterstock/videos/1035411353/thumb/1.jpg"},
    { clicked: false, day: 18, alt: "three rats curled up one wears a santa hat",image: "https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/e35/12362044_447807018741232_2085790069_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=DQOMXKyWaqYAX_I292L&se=7&oh=640e75d4eb0703c71a3240643116d727&oe=5EAB94BB&ig_cache_key=MTEzNjkzOTk0NTIxMTgxMjgzMA%3D%3D.2"},
    { clicked: false, day: 19, alt: "rat clumbing in a christmas tree", image: "https://i.pinimg.com/originals/1d/b5/96/1db5962e1075374f1e59b60fa2c38d5b.jpg"},
    { clicked: false, day: 20, alt: "two rats inside a stanta hat one is happily eating a gummy", image: "https://lindsaywildlife.org/wp-content/uploads/2015/01/Domestic-Rats-Misty-and-Luna-Christmas-theme-Paul-Hara.jpeg"},
    { clicked: false, day: 21, alt: "rat near a felt santa", image: "https://www.asianscientist.com/wp-content/uploads/bfi_thumb/hacking-phd-lab-rat-christmas-32w0vljrx9xclpazt88w00.jpg"},
    { clicked: false, day: 22, alt: "rat wearing a santa hat on a glittery background", image: "https://videohive.img.customer.envatousercontent.com/files/a389292b-0443-4f6d-86ee-e2a9cee02faa/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=815db19885d2fe4417ba14b8a7091ba7"},
    { clicked: false, day: 23, alt: "rat wearing a santa hat near a bauble", image: "https://ak3.picdn.net/shutterstock/videos/1041128113/thumb/1.jpg?ip=x480"},
    { clicked: false, day: 24, alt: "rat frolicking in gold baubles", image: "https://videohive.img.customer.envatousercontent.com/files/72872e3a-a5eb-402b-9c03-bd3b97ab923d/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=e33837b473dd2c3e00f751d9ee830a77"}
  ] }
  
  componentDidMount() {
    const retrievedSchema = JSON.parse(localStorage.getItem("state"));
    if (retrievedSchema !== null) {
      this.setState({schema : retrievedSchema});
    }
  }

  render() { 
    return (<main>
      <h1>Have yourself a ratty little Christmas</h1>
      <div><br></br></div>
      <div className="Calendar">
      {this.state.schema.map((item, index) => (
          <Window
            day={item.day}
            image={item.image}
            alt={item.alt}
            clickHandler={this.clickHandler}
            clicked={item.clicked}
            index={index}
          />
        ))}
    </div>
    </main>);
  }

  clickHandler = (index) => {
    var date = new Date();
    var schema = [...this.state.schema];
    schema[index].clicked = true;
    this.setState({schema});
    const storedSchema = JSON.stringify(schema);
    localStorage.setItem("state", storedSchema);
    //const retrievedSchema = JSON.parse(localStorage.getItem("state"));
    //console.log(retrievedSchema);

    if(this.state.schema[index].day > date.getDate()) {
    alert('Peeking ahead? Tsk tsk! There might be on the naughty list for you yet...');
    }
  }

}
 
export default App;