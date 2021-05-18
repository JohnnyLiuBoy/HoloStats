use sqlx::PgPool;
use warp::test::request;
use warp::Filter;

use crate::config::CONFIG;
use crate::reject::handle_rejection;
use crate::v3::api;

use super::utils::is_invalid_query;

#[tokio::test]
async fn invalid_query() {
    let pool = PgPool::connect(&CONFIG.database.url).await.unwrap();

    let api = api(pool).recover(handle_rejection);

    is_invalid_query(
        request()
            .method("GET")
            .path("/v3/streams_report")
            .reply(&api)
            .await,
    );

    is_invalid_query(
        request()
            .method("GET")
            .path("/v3/streams_report?foo=bar")
            .reply(&api)
            .await,
    );

    is_invalid_query(
        request()
            .method("GET")
            .path("/v3/streams_report?ids=yuudachi")
            .reply(&api)
            .await,
    );

    is_invalid_query(
        request()
            .method("GET")
            .path("/v3/streams_report?metrics=yuudachi")
            .reply(&api)
            .await,
    );
}
