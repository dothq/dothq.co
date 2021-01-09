#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate rocket_contrib;

use rocket::*;
use rocket_contrib::json::{JsonValue};

// Routes
mod id;

// Extras
mod errors;

#[get("/")]
pub fn index() -> JsonValue {
    json!({ "ok": true })
}

fn main() {
    rocket::ignite()
        .mount("/", routes![
            index,
            id::create
        ])
        .register(catchers![
            errors::not_found,
            errors::unauthorized
        ])
        .launch();
}