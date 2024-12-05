
// Minimal JS for opening and closing modals
function openLeaderViewModal() {
    document.getElementById('viewLeaderModal').classList.add('active');
}
function closeLeaderViewModal() {
    document.getElementById('viewLeaderModal').classList.remove('active');
}
function openMentorModal() {
    document.getElementById('mentorModal').classList.add('active');
}
function closeMentorModal() {
    document.getElementById('mentorModal').classList.remove('active');
}
function openMentorViewModal() {
    document.getElementById('viewMentorModal').classList.add('active');
}
function closeMentorViewModal() {
    document.getElementById('viewMentorModal').classList.remove('active');
}
function openMemberModal() {
    document.getElementById('memberModal').classList.add('active');
}
function closeMemberModal() {
    document.getElementById('memberModal').classList.remove('active');
}
function openMemberViewModal() {
    document.getElementById('viewMemberModal').classList.add('active');
}
function closeMemberViewModal() {
    document.getElementById('viewMemberModal').classList.remove('active');
}

$(function () {
    // Initialize Select2 with full width and placeholder
    $("#mentor-university").select2({
        placeholder: "Search for your university",
        allowClear: true,
        width: '100%' // Ensure it matches the input field width
    });
});


$(function () {
    // Initialize Select2 with full width and placeholder
    $("#member-university").select2({
        placeholder: "Search for your university",
        allowClear: true,
        width: '100%' // Ensure it matches the input field width
    });
});


$(function () {
    // Initialize Select2 with full width and custom placeholder
    $("#leader-university").select2({
        placeholder: "Search for your university",
        allowClear: true,
        width: '100%' // Match input width
    });
});