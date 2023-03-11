import './App.css';
import Carousel from './Carousel';
import Container from 'react-bootstrap/Container';

const IMAGES = [
  {image: "alligator.jpg", text: "Notorious for its powerful jaws and teeth"},
  {image: "angelfish.jpg", text: "Often kept in aquariums for its peaceful nature and aesthetic appeal"},
  {image: "antelope.png", text: "Graceful and swift mammal that inhabits grasslands and savannas"},
  {image: "ant.jpg", text: "On the ground it crawls with ease, A tiny wonder to behold, indeed. A tireless worker in its realm; it's strength is much beyond the helm."},
  {image: "arcticwolf.jpg", text: "It hunts in a pack, And never looks back, Its howl echoing through the icy dome."},
  {image: "baldeagle.jpg", text: "A majestic bird of prey, known for its striking white head and fierce hunting abilities."},
  {image: "bat.jpg", text: "Silent wings take flight, Echoes guide through the darkness, Nature's night vision."},
  {image: "bear.png", text: "Large, powerful mammal with shaggy fur and sharp claws."},
  {image: "cat.jpg", text: "Graceful feline with an independent nature"},
  {image: "cheetah.jpg", text: "A blur of golden spots in motion, Swift and agile like the wind's notion."},
  {image: "chicken.jpg", text: "Studies have shown that they are capable of basic problem-solving, social learning, and even exhibit self-control."},
  {image: "chimpanzee.jpg", text: "It swings from tree to tree, And plays with such glee, A sight that's both silly and yellow."},
  {image: "cow.jpg", text: "With her moo and her low, She's a gentle giant, don't you know."},
  {image: "coyote.jpeg", text: "Lone trickster of night, Howling at the moon's delight, Coyote takes flight."},
  {image: "dog.jpg", text: "A furry friend with four legs, a wagging tail, and a wet nose. They like to play, cuddle, and give kisses, just like you!"},
  {image: "dolphin.jpg", text: "It is an intelligent marine mammal known for its playful nature, acrobatic abilities, and communication skills."},
  {image: "duck.jpg", text: "A cute and funny bird that likes to swim in ponds and waddle on land. It has a beak to catch bugs and plants to eat, and feathers that keep it warm and dry."},
  {image: "elephant.jpg", text: "It's quite the grand sight, With wrinkles and ears that delight. Its trunk can pick things up, Like peanuts in a cup, And it trumpets with all its might."},
  {image: "fox.jpg", text: "A small and nimble mammal with distinctive red fur and a bushy tail. It is known for its intelligence, speed, and adaptability, and can be found in a variety of habitats around the world."},
  {image: "giraffe.jpg", text: "a tall animal with a long neck and big spots. They eat leaves from high up in trees and can run very fast."},
  {image: "gorilla.jpg", text: "An animal who loves bananas and adventure. He likes to climb and swing from vines, and he has a lot of friends who help him along the way."},
  {image: "hare.png", text: "a cute, fluffy animal with long ears and a twitchy nose. They like to hop and play, and they have soft fur that's fun to pet."},
  {image: "hippo.jpg", text: "a large, gray animal that loves to spend time in the water. They have big mouths and sharp teeth, but don't worry, they're usually very gentle! They love to eat plants and sometimes even swim with their friends."},
  {image: "human.webp", text: "They are special creatures who are born from their mother's tummy. They grow and learn many things, like talking, walking, and playing with toys. They can also love and care for others around them."},
  {image: "kangaroo.jpg", text: "They have strong legs and a tail that helps them jump very far. They also carry their babies, called joeys, in their pouches until they're big enough to hop on their own."},
  {image: "koala.jpg", text: "They are small, tree-dwelling marsupials native to Australia that primarily eat eucalyptus leaves. Despite their cute and cuddly appearance, they can be quite territorial and have sharp claws for climbing and defending themselves"},
  {image: "lamb.jpg", text: "Soft and white, with fleece so bright, This little thing is a cute sight!"},
  {image: "lion.jpg", text: "Ashe"},
  {image: "macaque.jpg", text: "In jungles do I thrive, My antics sure to come alive, With a cheeky grin, And a playful spin, It's hard not to let out a high-five."},
  {image: "meerkat.jpg", text: "With watchful eyes and upright stance, The creature scans the dry expanse, A sentry for its kin and pack, It's cautious, quick, and always back, A true survivor of the sand and sun."},
  {image: "monkey.jpg", text: "Swinging through the trees, Mischievous and curious, Look at me play."},
  {image: "orca.jpg", text: "Graceful giant of sea, Black and white, beauty to see, I swim so free."},
  {image: "oryx.jpg", text: "I am a little animal, cute and sweet, With long legs and tiny hooves on my feet, I have small horns, but they will grow with time, And I love to play and frolic in the sunshine."},
  {image: "panda.jpg", text: "I'm a bear who loves to eat bamboo, And my black and white coat is quite the view, I'm known for being cute and cuddly too"},
  {image: "penguin.jpg", text: "Black and white tuxedo, Waddling on icy terrain, Happily I dance on."},
  {image: "pig.jpg", text: "Black and white tuxedo, Waddling on icy terrain, Happily I dance on."},
  {image: "pony.jpg", text: "I love to run and prance and play, And when I neigh, you'll hear me bray. I am known for my thick mane and tail."},
  {image: "porcupine.jpg", text: "A spiky ball of quills and fur, I move with a steady whir, In the night, I roam and play, But beware my quills, in many ways."},
  {image: "raccoon.jpg", text: "What North American animal has a distinctive black ‘mask’ around its eyes, dexterous paws, and is known for its curious and mischievous nature?"},
  {image: "rhino.jpg", text: "Big animal, grey and strong, With a horn that's very long. It has a bumpy skin that's tough, And it's loud when it snorts and huffs."},
  {image: "robot.jpg", text: "Metallic being, Programmed for specific tasks, Efficient and cold."},
  {image: "seal.jpg", text: "Soft and silky fur, Baby rests on the shore, Waves sing lullabies."},
  {image: "skunk.jpg", text: "I'm thinking of an animal that has black and white fur, a fluffy tail, and a really bad smell. Who am I thinking of?"},
  {image: "sloth.jpg", text: "I move very slowly and spend most of its time hanging upside down from trees. I have long, curved claws that I use to grip onto branches. Who am I?"},
  {image: "snake.jpg", text: "I'm thinking of an animal that has a long, slender body and no legs. It can slither and slide along the ground very quickly. Who am I thinking of?"},
  {image: "sugar_glider.jpg", text: "I am a small, nocturnal marsupial that is native to Australia and New Guinea. I have soft, fluffy fur and big, dark eyes. Who am I?"},
  {image: "tiger.jpg", text: "Tiny cub, Furry, fierce, and full of life, Roaming through the wild"},
  {image: "tropicbird.jpg", text: "Fuzzy little chick, Nestled in a cliffside home, Waits to take flight soon."},
  {image: "turtle.jpg", text: "Tiny baby shells, Hatchlings on the sandy beach, New life starts to crawl."},
  {image: "vulture.jpeg", text: "It likes to fly high in the sky and look for food. They eat things that are already dead, like animals that have passed away."},
  {image: "whale.jpg", text: "Gentle giant roams, Singing songs of the deep blue, Graceful dance in waves."},
  {image: "yoda.webp", text: "Wrinkled skin, pointy ears have I, Wise and calm, the Force is nigh. Small in size, a Master am I, Path of light, strong it does imply."},
  {image: "zebra.png", text: "Ah, now there's a grand sight to see, A creature with stripes so fancy and free! Black and white, all sharp and bold, It's like nothing I've ever seen or been told."},
];


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function App() {
  return (
    <Container style={{height: "100vh", width: "100wh"}}>
      <Carousel images={shuffle(IMAGES)} />
    </Container>
  )
}

export default App;
