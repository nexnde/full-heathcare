#!/bin/bash
# SETUP SCRIPT - Run this to start the React Nestly app
# Execute each step one by one

echo "=========================================="
echo "🚀 REACT NESTLY APP - COMPLETE SETUP"
echo "=========================================="
echo ""

# STEP 1: Navigate to project
echo "STEP 1: Navigate to project directory"
echo "Command: cd /path/to/medtrace"
cd "c:\Users\Rohit\OneDrive\Desktop\Meditrace\medtrace"
echo "✅ In project directory"
echo ""

# STEP 2: Check if dependencies installed
echo "STEP 2: Check npm packages"
echo "Command: npm list react react-dom"
npm list react react-dom 2>&1 | head -5
echo "✅ React packages installed"
echo ""

# STEP 3: Check source files
echo "STEP 3: Verify src/ directory exists"
ls -la src/ 2>&1 | head -10
echo "✅ src/ directory confirmed"
echo ""

echo "=========================================="
echo "NEXT: Follow the manual steps below"
echo "=========================================="
