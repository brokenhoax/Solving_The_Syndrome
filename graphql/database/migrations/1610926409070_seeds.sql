INSERT INTO roles(title)
VALUES
('admin'),
('blogger');

INSERT INTO permissions(action)
VALUES
('post'),
('manage-users');

INSERT INTO roles_permissions (role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, 'andrew@krausonline.com', 'Andrew', 'Kraus');

INSERT INTO blog_categories (label, description)
VALUES
('JavaScript', 'Category description here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.'),
('React', 'Category description here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.'),
('Vue', 'Category description here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.'),
('Tech Culture', 'Category description here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.'),
('Tech News', 'Category description here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.'),
('Brain Health', 'Category description here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.'),
('Cloud Services', 'Category description here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.');

INSERT INTO blog_posts (author_id, title, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'Can anyone code?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.', 'banana.jpg', 1, 'Functional Programming', 'ES6', 'banana.jpg', 'Image'),
(1, 'Using AWS S3 for storing blog images', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.', 'code.jpg', 1, 'Functional Programming', 'ES6', 'code.jpg', 'Image'),
(1, 'Popular Programming Languages in 2021', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.', 'graph.jpg', 1, 'Functional Programming', 'ES6', 'graph.jpg', 'Image'),
(1, 'Brain Hacks for Learning to Program', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.', 'grid.jpg', 1, 'Functional Programming', 'ES6', 'grid.jpg', 'Image'),
(1, 'Software Engineer Salary in 2021', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.', 'money.jpg', 1, 'Functional Programming', 'ES6', 'money.jpg', 'Image'),
(1, 'GraphQL vs REST', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.', 'neuron.jpg', 1, 'Functional Programming', 'ES6', 'neuron.jpg', 'Image'),
(1, 'A Day in the Life of a Programmer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.', 'programmer.jpg', 1, 'Functional Programming', 'ES6', 'programmer.jpg', 'Image'),
(1, 'React vs Vue?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sit amet massa nec sollicitudin. Donec at dui eu augue.', 'tired.jpg', 1, 'Functional Programming', 'ES6', 'tired.jpg', 'Image');


INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1,1, 'Totally bro!'),
(1,1, 'Friggin rad!');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1,4), 
(1,5),
(2,7),
(3,4),
(3,5),
(4,6), 
(5,4),
(6,1),
(6,2),
(7,4),
(8,6);
