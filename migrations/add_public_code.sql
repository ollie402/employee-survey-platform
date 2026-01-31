-- Migration: Add public_code column to surveys table
-- Run this SQL in your Supabase SQL Editor

-- Step 1: Add public_code column to surveys table
ALTER TABLE surveys ADD COLUMN IF NOT EXISTS public_code text UNIQUE;

-- Step 2: Create index for fast lookups by public_code
CREATE INDEX IF NOT EXISTS idx_surveys_public_code ON surveys(public_code);

-- Step 3: Backfill existing surveys with generated codes (9 character alphanumeric)
UPDATE surveys
SET public_code = lower(substring(md5(random()::text) from 1 for 9))
WHERE public_code IS NULL;

-- Step 4: Make the column required for future inserts
ALTER TABLE surveys ALTER COLUMN public_code SET NOT NULL;

-- Verify the migration worked
SELECT id, name, public_code FROM surveys LIMIT 10;
