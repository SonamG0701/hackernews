export interface News {
    hits: NewsItems[],
    nbPages:Number,
    hitsPerPage:Number
}

export interface NewsItems {
    created_at: string,
    author: string,
    story_id: Number,
    story_title: string,
    story_url: string,
    num_comments:Number,
    isVisible: boolean,
    hostname:string,
    upVote: Number
}

export interface upVote {
    upVoteCount: Number;
    story_id:Number;
}