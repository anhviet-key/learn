package todo

type Todo struct {
	ID     int    `redis:"id" json:"id"`
	Title  string `redis:"title" json:"title"`
	Status bool   `redis:"status" json:"status"`
}

var Todos = []Todo{}
