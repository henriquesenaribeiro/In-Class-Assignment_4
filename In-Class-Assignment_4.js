// Part 1

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export async function getPosts() {
  const res = await fetch(BASE_URL); 

if(!res.ok) {
  throw new Error (Error: $(res.status) );
}
  return await res.json();
  catch (err) {
    console.error('API Fetch Failed:', err.message);
    throw err;
  }
}

// Part 3

import { getPosts } from './api.js';

async function displayPosts() {
  const posts = await get Posts();

  post.slice(0, 5).forEach(post => {
    div.innerHTML = <h3>${post.title}</h3><p>${post.body}</p.;
  });
} catch (err)' {
  container.innerHTML = '<p style="color:red;">Failed to load posts:
$ {err.message}</p>';
    }
}
displayPosts();

