import { useState, type FormEvent } from 'react'
import {
  MessageCircle,
  Video,
  Send,
  Copy,
  Users,
  ArrowUpRight,
} from 'lucide-react'
import './Huddle.css'

type Message = {
  id: number
  text: string
  time: string
}

function Huddle() {
  const [messages, setMessages] = useState<Message[]>([])
  const [messageInput, setMessageInput] = useState('')
  const [textCopied, setTextCopied] = useState(false)
  const [meetingCopied, setMeetingCopied] = useState(false)

  const textRoomId = 'text-room'
  const meetingRoomId = 'meeting-room'

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedMessage = messageInput.trim()
    if (!trimmedMessage) return

    const newMessage: Message = {
      id: Date.now(),
      text: trimmedMessage,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

    setMessages((previous) => [...previous, newMessage])
    setMessageInput('')
  }

  const copyInviteLink = async (
    roomId: string,
    setCopied: (value: boolean) => void,
  ) => {
    const inviteLink = `${window.location.origin}/huddle/${roomId}`

    try {
      await navigator.clipboard.writeText(inviteLink)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      alert('Unable to copy the invite link. Please copy it manually.')
    }
  }

  const startMeeting = () => {
    // TODO: Integrate actual video and voice calling here.
    alert('Video and voice meetings will be available soon.')
  }

  return (
    <main className="huddle-page">

      <header className="huddle-heading">
        <h1 className="huddle-brand">QUADLY</h1>
        <div className="huddle-heading-line" />
        <h2 className="huddle-title">Huddle</h2>
      </header>

      <section className="huddle-intro">
        <span className="huddle-eyebrow">YOUR CAMPUS COMMUNITY</span>
        <h2>Connect. Communicate. Collaborate.</h2>
        <p>
          Your space to talk, share ideas and connect with your campus.
        </p>
      </section>

      <section className="huddle-rooms">

        {/* TEXT ROOM */}
        <article className="huddle-card">

          <div className="huddle-card-header">
            <div className="huddle-room-icon">
              <MessageCircle size={25} />
            </div>

            <div className="huddle-room-info">
              <h3>Text Room</h3>
              <span className="huddle-status">
                <span className="status-dot status-open" />
                Open
              </span>
            </div>

            <span className="huddle-room-tag">CHAT</span>
          </div>

          <div className="huddle-chat-area">
            {messages.length === 0 ? (
              <div className="huddle-empty">
                <MessageCircle size={35} strokeWidth={1.2} />
                <p>No messages yet</p>
                <span>Start the conversation.</span>
              </div>
            ) : (
              <div className="huddle-messages">
                {messages.map((message) => (
                  <div className="huddle-message" key={message.id}>
                    <div className="huddle-message-content">
                      <p>{message.text}</p>
                      <span>{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <form className="huddle-message-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
              placeholder="Write a message..."
              aria-label="Write a message"
            />

            <button
              type="submit"
              className="huddle-send-button"
              aria-label="Send message"
              disabled={!messageInput.trim()}
            >
              <Send size={17} />
            </button>
          </form>

          <button
            type="button"
            className="huddle-copy-button"
            onClick={() => copyInviteLink(textRoomId, setTextCopied)}
          >
            <Copy size={15} />
            {textCopied ? 'Copied!' : 'Copy invite link'}
          </button>

        </article>

        {/* MEETING ROOM */}
        <article className="huddle-card">

          <div className="huddle-card-header">
            <div className="huddle-room-icon">
              <Video size={25} />
            </div>

            <div className="huddle-room-info">
              <h3>Meeting Room</h3>
              <span className="huddle-status">
                <span className="status-dot status-ready" />
                Ready
              </span>
            </div>

            <span className="huddle-room-tag">VIDEO & VOICE</span>
          </div>

          <div className="huddle-meeting-area">
            <div className="huddle-empty">
              <Users size={38} strokeWidth={1.2} />
              <p>No one has joined</p>
              <span>Start a meeting and invite others.</span>
            </div>
          </div>

          <button
            type="button"
            className="huddle-start-button"
            onClick={startMeeting}
          >
            <Video size={17} />
            Start meeting
            <ArrowUpRight size={16} />
          </button>

          <button
            type="button"
            className="huddle-copy-button"
            onClick={() => copyInviteLink(meetingRoomId, setMeetingCopied)}
          >
            <Copy size={15} />
            {meetingCopied ? 'Copied!' : 'Copy invite link'}
          </button>

        </article>

      </section>
    </main>
  )
}

export default Huddle