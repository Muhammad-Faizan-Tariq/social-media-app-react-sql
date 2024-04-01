export const getPost = (req, res) => {
    const q =
    `SELECT p.*, u.id AS userId, name, profilePic
    FROM posts AS p
    JOIN users AS u
    ON (u.id = p.userID)`
}