-- Create chat_responses table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.chat_responses (
    id SERIAL PRIMARY KEY,
    session_id TEXT NOT NULL,
    participant_id TEXT,
    chat_type TEXT NOT NULL CHECK (chat_type IN ('listening', 'chat', 'pulse')),
    messages JSONB NOT NULL DEFAULT '[]',
    responses JSONB NOT NULL DEFAULT '{}',
    sentiment TEXT DEFAULT 'neutral' CHECK (sentiment IN ('positive', 'neutral', 'negative')),
    duration_ms INTEGER,
    start_time TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_chat_responses_session_id ON public.chat_responses(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_responses_participant_id ON public.chat_responses(participant_id);
CREATE INDEX IF NOT EXISTS idx_chat_responses_chat_type ON public.chat_responses(chat_type);
CREATE INDEX IF NOT EXISTS idx_chat_responses_completed_at ON public.chat_responses(completed_at);
CREATE INDEX IF NOT EXISTS idx_chat_responses_created_at ON public.chat_responses(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE public.chat_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now (you can restrict this later)
CREATE POLICY "Enable all operations for chat_responses" ON public.chat_responses
FOR ALL USING (true) WITH CHECK (true);

-- Create trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_chat_responses_updated_at
    BEFORE UPDATE ON public.chat_responses
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Add comment to table for documentation
COMMENT ON TABLE public.chat_responses IS 'Stores chat responses from users participating in feedback sessions';
COMMENT ON COLUMN public.chat_responses.session_id IS 'ID of the chat session';
COMMENT ON COLUMN public.chat_responses.participant_id IS 'ID or email of the participant';
COMMENT ON COLUMN public.chat_responses.chat_type IS 'Type of chat: listening, chat, or pulse survey';
COMMENT ON COLUMN public.chat_responses.messages IS 'JSON array of all messages in the conversation';
COMMENT ON COLUMN public.chat_responses.responses IS 'JSON object of structured responses/answers';
COMMENT ON COLUMN public.chat_responses.sentiment IS 'Overall sentiment analysis of the conversation';
COMMENT ON COLUMN public.chat_responses.duration_ms IS 'Duration of the chat session in milliseconds';