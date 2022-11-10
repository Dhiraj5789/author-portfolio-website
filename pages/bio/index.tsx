import { AUTHOR } from "../../data";
import { H2 } from "../../modules/lined-section/styles";
import { ProfilePictureContainer } from "../../modules/profile-picture/styles";
import { H3, Section } from "./styles";

export default function () {
  return (
    <>
      <ProfilePictureContainer />
      <Section>
        <H2>
          <em>About {AUTHOR}</em>
        </H2>
        <H3>
          John Green is the #1 New York Times bestselling author of Looking for
          Alaska, An Abundance of Katherines, Paper Towns, The Fault in Our
          Stars, and Turtles All the Way Down. He is also the coauthor, with
          David Levithan, of Will Grayson, Will Grayson. He was the 2006
          recipient of the Michael L. Printz Award, a 2009 Edgar Award winner,
          and has twice been a finalist for the Los Angeles Times Book Prize.
          Green’s books have been published in more than 55 languages and over
          24 million copies are in print.
        </H3>
        <p>
          In June 2014, the movie adaptation of The Fault in Our Stars was
          released, directed by Josh Boone, produced by Fox 2000 and Temple
          Hill, and starring Shailene Woodley, Ansel Elgort, and Nat Wolff. The
          screenplay was written by Scott Neustadter and Michael Weber, who went
          on to adapt Paper Towns for film. Fox 2000 and Temple Hill released
          Paper Towns in the summer of 2015, starring Nat Wolff, Cara
          Delevingne, Justice Smith, Austin Abrams, Halston Sage, and Jaz
          Sinclair. In the second half of 2015, John signed a first look
          production deal with Fox 2000. The limited series adaptation of
          Looking for Alaska was released on Hulu on October 18th, 2019 starring
          Kristine Froseth, Charlie Plummer, and Denny Love. A Netflix
          adaptation of Let It Snow was released on November 8th, 2019 starring
          Isabela Merced, Shameik Moore, Kiernan Shipka, Odeya Rush, Liv Hewson,
          Joan Cusack, Mitchell Hope and more.{" "}
        </p>
        <p>
          In 2007, John and his brother Hank ceased textual communication and
          began to talk primarily through videoblogs posted to YouTube. The
          videos spawned a community of people called nerdfighters who fight for
          intellectualism and to decrease the overall worldwide level of suck.
          (Decreasing suck takes many forms: Nerdfighters have raised millions
          of dollars to fight poverty in the developing world; they also planted
          thousands of trees around the world in May of 2010 to celebrate Hank’s
          30th birthday.) Although they have long since resumed textual
          communication, John and Hank continue to upload two videos a week to
          their YouTube channel, vlogbrothers. Their videos have been viewed
          more than 800 million times.
        </p>{" "}
        <p>
          John and Hank launched educational YouTube channel Crash Course in
          late 2011 with funding from YouTube’s original channel initiative.
          John, Hank, and a range of other hosts teach humanities and science
          courses to viewers, with multiple new series launching each year.
          World History, Literature, Economics, Physics, Biology, Chemistry, and
          Government are just some of the courses available to date. Crash
          Course has over 10.7 million subscribers and 1.2 billion views. John
          and Hank are involved with a myriad of other video projects, including
          The Art Assignment, Ours Poetica, SciShow, hankgames, Eons and
          Healthcare Triage.
        </p>
        <p>
          John’s book reviews have appeared in The New York Times Book Review
          and Booklist, a wonderful book review journal where he worked as a
          publishing assistant and production editor while writing Looking for
          Alaska. John grew up in Orlando, Florida before attending Indian
          Springs School and then Kenyon College. He currently lives in
          Indianapolis with his family.
        </p>
      </Section>
    </>
  );
}
