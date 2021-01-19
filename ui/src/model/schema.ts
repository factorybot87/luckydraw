export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type RootMutationType = {
  __typename?: 'RootMutationType'
  drawWinner?: Maybe<Candidate>
  deleteAward?: Maybe<Award>
  addAward?: Maybe<Award>
  editAward?: Maybe<Award>
  giveUpAward?: Maybe<Award>
}

export type RootMutationTypeDrawWinnerArgs = {
  awardId: Scalars['ID']
}

export type RootMutationTypeDeleteAwardArgs = {
  id: Scalars['ID']
}

export type RootMutationTypeAddAwardArgs = {
  content: Scalars['String']
  price: Scalars['Int']
  provider?: Maybe<Scalars['String']>
}

export type RootMutationTypeEditAwardArgs = {
  content?: Maybe<Scalars['String']>
  id: Scalars['ID']
  price?: Maybe<Scalars['Int']>
  provider?: Maybe<Scalars['String']>
}

export type RootMutationTypeGiveUpAwardArgs = {
  awardId: Scalars['ID']
}

export type Candidate = {
  __typename?: 'Candidate'
  id: Scalars['ID']
  name: Scalars['String']
  isWinner?: Maybe<Scalars['Boolean']>
}

export type RootQueryType = {
  __typename?: 'RootQueryType'
  awards?: Maybe<Array<Maybe<Award>>>
  candidates?: Maybe<Array<Maybe<Candidate>>>
  curAward?: Maybe<Award>
  winner?: Maybe<Candidate>
}

export type Award = {
  __typename?: 'Award'
  content: Scalars['String']
  id: Scalars['ID']
  price?: Maybe<Scalars['Int']>
  provider?: Maybe<Scalars['String']>
  winner?: Maybe<Scalars['ID']>
}
